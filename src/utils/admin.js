export const ADMIN_UID = "fJ8DMsDT5KfpU1K7nm0YXvPaQgO2";

export function hasAdminAccess(uid) {
  return uid === ADMIN_UID;
}
