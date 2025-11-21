import { Role } from '../enums/index.js';
import { Email } from '../value-objects/Email.js';

export interface UserProps {
  id: string;
  email: string;
  password: string;
  name: string;
  avatar?: string | null;
  cpf?: string | null;
  phone?: string | null;
  role: Role;
  isActive: boolean;
  failedLogins: number;
  lockedUntil?: Date | null;
  lastLoginAt?: Date | null;
  lastLoginIp?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  private props: UserProps;

  private constructor(props: UserProps) {
    this.props = props;
  }

  static create(props: UserProps): User {
    Email.create(props.email); // Validates email
    return new User(props);
  }

  get id(): string {
    return this.props.id;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get name(): string {
    return this.props.name;
  }

  get avatar(): string | null | undefined {
    return this.props.avatar;
  }

  get cpf(): string | null | undefined {
    return this.props.cpf;
  }

  get phone(): string | null | undefined {
    return this.props.phone;
  }

  get role(): Role {
    return this.props.role;
  }

  get isActive(): boolean {
    return this.props.isActive;
  }

  get failedLogins(): number {
    return this.props.failedLogins;
  }

  get lockedUntil(): Date | null | undefined {
    return this.props.lockedUntil;
  }

  get lastLoginAt(): Date | null | undefined {
    return this.props.lastLoginAt;
  }

  get lastLoginIp(): string | null | undefined {
    return this.props.lastLoginIp;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  isLocked(): boolean {
    if (!this.props.lockedUntil) return false;
    return new Date() < this.props.lockedUntil;
  }

  incrementFailedLogins(): void {
    this.props.failedLogins += 1;
    if (this.props.failedLogins >= 5) {
      // Lock for 15 minutes after 5 failed attempts
      this.props.lockedUntil = new Date(Date.now() + 15 * 60 * 1000);
    }
  }

  resetFailedLogins(): void {
    this.props.failedLogins = 0;
    this.props.lockedUntil = null;
  }

  updateLastLogin(ip: string): void {
    this.props.lastLoginAt = new Date();
    this.props.lastLoginIp = ip;
  }

  toJSON(): UserProps {
    return { ...this.props };
  }
}
