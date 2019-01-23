import log from '@kevinwang0316/log';
import jwt from 'jsonwebtoken';

import verifyJWT from '../src/VerifyJWT';
import { exec } from 'child_process';

jest.mock('@kevinwang0316/log', () => ({ info: jest.fn() }));
jest.mock('jsonwebtoken', () => ({ verify: jest.fn().mockReturnValue('return value') }));

describe('Test VerifyJWT', () => {
  beforeEach(() => {
    log.info.mockClear();
    jwt.verify.mockClear();
  });

  test('verifyJWT without error', () => {
    const message = 'message';
    const secret = 'secret';
    const jwtSecret = { trim: jest.fn().mockReturnValue(secret) };

    const result = verifyJWT(message, jwtSecret);

    expect(jwt.verify).toHaveBeenCalledTimes(1);
    expect(jwt.verify).toHaveBeenLastCalledWith(message, secret);
    expect(jwtSecret.trim).toHaveBeenCalledTimes(1);
    expect(result).toBe('return value');
    expect(log.info).not.toHaveBeenCalled();
  });

  test('verifyJWT with error', () => {
    const message = 'message';
    const secret = 'secret';
    const jwtSecret = { trim: jest.fn().mockReturnValue(secret) };
    jwt.verify = jest.fn().mockImplementationOnce(() => { throw new Error('error message'); });

    const result = verifyJWT(message, jwtSecret);

    expect(result).toBe(false);
    expect(log.info).toHaveBeenCalledTimes(1);
    expect(log.info).toHaveBeenLastCalledWith(`Verify JWT failed with message ${message}`);
  });
});
