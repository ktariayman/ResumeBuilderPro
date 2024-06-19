import fs from 'fs';
import path from 'path';

describe('File Existence Test', () => {
  it('should check if index.ts file exists', () => {
    const filePath = path.join(__dirname, '../index.ts');
    const fileExists = fs.existsSync(filePath);
    expect(fileExists).toBe(true);
  });
});
