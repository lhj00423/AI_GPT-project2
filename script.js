const generateBtn = document.querySelector('#generateBtn'); // 1
const gridContainer = document.querySelector('#gridContainer'); // 2

generateBtn.addEventListener('click', () => { //3

    // if(gridContainer.children.length >= 30 ) {  
    //     const confirmed = confirm("이미지가 30개 찼습니다. 모든 사진을 지우시겠습니까?"); 
    //     if(confirmed){                          
    //         gridContainer.innerHTML = ""; //이미지 모두 삭제       
    //     }
    // }


    // const randomNumber = Math.floor(Math.random() * 1000) +1; //4
    // const imgUrl = `https://picsum.photos/500?random=${randomNumber}`; //5

    // const img = document.createElement('img'); // 6
    // //img.src = imgUrl; //7 -> 4+5 결합된 코드 
    // img.src = imgUrl
    // // ${} -> 어떤 문자열 안에 동적인 값을 넣을떄 쓰는 문법 
    // gridContainer.appendChild(img); //8 이전코드


    if(gridContainer.children.length >= 30 ) {  
            const confirmed = confirm("이미지가 30개 찼습니다. 모든 사진을 지우시겠습니까?"); 
             if(confirmed){                          
                 gridContainer.innerHTML = ""; //이미지 모두 삭제       
             }
         } else{
            const randomNumber = Math.floor(Math.random() * 1000) + 1;
            const imgUrl = `https://picsum.photos/500?random=${randomNumber}`;
            const img = document.createElement('img');
            img.src = imgUrl;
            gridContainer.appendChild(img);
         }
    
});