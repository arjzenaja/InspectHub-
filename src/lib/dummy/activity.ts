export interface TimelineEntry {
  text: string;
  time: string;
  type: 'approved' | 'uploaded' | 'started' | 'scheduled' | 'default';
}

export const DEFAULT_ENTRIES: TimelineEntry[] = [];

export default DEFAULT_ENTRIES;
