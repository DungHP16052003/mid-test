function  highlightKeyword(content, keyword){
    const regex = new RegExp(keyword, 'gi');
    content = content.replace(keyword, (match) => `<strong>${match}</strong>`);
}
return content;
const highlightKeyword2 = highlightKeyword("Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?", "thú vỊ");
document.write('content') = highlightKeyword2;