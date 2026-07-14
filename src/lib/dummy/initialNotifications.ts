export interface Notification {
  id: string;
  type: 'inspection' | 'equipment' | 'report' | 'alert';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date | string;
}

export const initialNotifications: Notification[] = [];

export default initialNotifications;
