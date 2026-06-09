"use client";

import { useEffect, useState } from "react";

export interface RepoStats {
  stars: number;
  language: string | null;
  pushedAt: string; // ISO date
}

export type StatsMap = Record<string, RepoStats>; // keyed by "owner/name"

const CACHE_KEY = "gh-stats-v1";
const CACHE_TTL = 1000 * 60 * 30; // 30 min

export const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  "Jupyter Notebook": "#DA5B0B",
};

export function timeAgo(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function readCache(): StatsMap | null {
  if (typeof window === "undefined") return null;
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const { at, data } = JSON.parse(cached);
      if (Date.now() - at < CACHE_TTL) return data;
    }
  } catch {
    /* ignore bad cache */
  }
  return null;
}

/**
 * Fetches live stats for all of the user's public repos in a single
 * GitHub API call. Fails silently — the UI just omits the stats.
 */
export function useGitHubStats(username: string): StatsMap {
  const [stats, setStats] = useState<StatsMap>(() => readCache() ?? {});

  useEffect(() => {
    if (readCache()) return;

    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((repos: Array<{ full_name: string; stargazers_count: number; language: string | null; pushed_at: string }>) => {
        const map: StatsMap = {};
        for (const r of repos) {
          map[r.full_name] = {
            stars: r.stargazers_count,
            language: r.language,
            pushedAt: r.pushed_at,
          };
        }
        setStats(map);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data: map }));
        } catch {
          /* storage full / private mode — fine */
        }
      })
      .catch(() => {
        /* rate-limited or offline — stats simply don't render */
      });
  }, [username]);

  return stats;
}
