import { User } from '@/entities/User';
import { UserRole } from '@/entities/User';

export const checkRoles = (roles: UserRole[], user?: User): boolean => {
  const isUserHasRequiredRole = roles.some((role) => role === user?.role);

  return isUserHasRequiredRole;
};
