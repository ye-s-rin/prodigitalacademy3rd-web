import fs from 'fs';
import zlib from 'zlib';

// comment.js 파일 경로
const filePath = 'comment.js';

// comment.js 파일 읽기
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('파일을 읽는 중 오류가 발생했습니다:', err);
        return;
    }

    // gzip으로 압축
    zlib.gzip(data, (err, compressedData) => {
        if (err) {
            console.error('데이터를 압축하는 중 오류가 발생했습니다:', err);
            return;
        }

        // 압축된 데이터를 파일로 쓰기
        const compressedFilePath = 'comment.gz';
        fs.writeFile(compressedFilePath, compressedData, (err) => {
            if (err) {
                console.error('압축된 데이터를 파일로 쓰는 중 오류가 발생했습니다:', err);
                return;
            }
            console.log('comment.js 파일이 gzip으로 압축되어 comment.gz 파일로 저장되었습니다.');
        });
    });
});
