"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { LatLngBoundsExpression } from "leaflet";

interface FitBoundsProps {
  locations: { lat: number | null; lng: number | null }[];
}

export function FitBounds({ locations }: FitBoundsProps) {
  const map = useMap();

  useEffect(() => {
    const validLocations = locations.filter(
      (l) => l.lat != null && l.lng != null
    ) as { lat: number; lng: number }[];

    if (validLocations.length === 0) {
      // Default center (Indonesia)
      map.setView([-2.5, 118], 5);
      return;
    }

    if (validLocations.length === 1) {
      // Single location: zoom to that point
      const loc = validLocations[0];
      map.setView([loc.lat, loc.lng], 13);
      return;
    }

    // Multiple locations: fit bounds
    const bounds = validLocations.map((l) => [l.lat, l.lng]) as LatLngBoundsExpression;
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [locations, map]);

  return null;
}
