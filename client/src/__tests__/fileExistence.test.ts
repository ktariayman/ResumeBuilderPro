import fs from 'fs';
import path from 'path';

describe('Dockerfile File exists', () => {
  it('should check if Dockerfile file exists', () => {
    const filePath = path.join(__dirname, '../../Dockerfile');
    const fileExists = fs.existsSync(filePath);
    expect(fileExists).toBe(true);
  });
});
