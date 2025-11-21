import { describe, it, expect } from 'vitest';
import { EncryptionService } from '../../../application/services/EncryptionService.js';

describe('EncryptionService', () => {
  const encryptionService = new EncryptionService();

  describe('hashPassword', () => {
    it('should hash a password', async () => {
      const password = 'MySecurePassword123!';
      const hash = await encryptionService.hashPassword(password);

      expect(hash).toBeDefined();
      expect(hash).not.toBe(password);
      expect(hash.length).toBeGreaterThan(50);
    });

    it('should generate different hashes for same password', async () => {
      const password = 'MySecurePassword123!';
      const hash1 = await encryptionService.hashPassword(password);
      const hash2 = await encryptionService.hashPassword(password);

      expect(hash1).not.toBe(hash2);
    });
  });

  describe('comparePassword', () => {
    it('should return true for correct password', async () => {
      const password = 'MySecurePassword123!';
      const hash = await encryptionService.hashPassword(password);
      const isValid = await encryptionService.comparePassword(password, hash);

      expect(isValid).toBe(true);
    });

    it('should return false for incorrect password', async () => {
      const password = 'MySecurePassword123!';
      const wrongPassword = 'WrongPassword456!';
      const hash = await encryptionService.hashPassword(password);
      const isValid = await encryptionService.comparePassword(wrongPassword, hash);

      expect(isValid).toBe(false);
    });
  });

  describe('encrypt/decrypt', () => {
    it('should encrypt and decrypt text correctly', () => {
      const plainText = 'Sensitive data to encrypt';
      const encrypted = encryptionService.encrypt(plainText);
      const decrypted = encryptionService.decrypt(encrypted);

      expect(encrypted).not.toBe(plainText);
      expect(decrypted).toBe(plainText);
    });

    it('should generate different ciphertexts for same plaintext', () => {
      const plainText = 'Sensitive data';
      const encrypted1 = encryptionService.encrypt(plainText);
      const encrypted2 = encryptionService.encrypt(plainText);

      expect(encrypted1).not.toBe(encrypted2);
    });
  });

  describe('generateRandomToken', () => {
    it('should generate token with default length', () => {
      const token = encryptionService.generateRandomToken();
      expect(token).toBeDefined();
      expect(token.length).toBe(64); // 32 bytes = 64 hex chars
    });

    it('should generate token with custom length', () => {
      const token = encryptionService.generateRandomToken(16);
      expect(token.length).toBe(32); // 16 bytes = 32 hex chars
    });

    it('should generate unique tokens', () => {
      const token1 = encryptionService.generateRandomToken();
      const token2 = encryptionService.generateRandomToken();
      expect(token1).not.toBe(token2);
    });
  });
});
