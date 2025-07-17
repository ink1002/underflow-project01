function showSection(section) {
    const content = document.getElementById('content');
    const backBtn = `<div class="back-button" onclick="showSection('welcome')">&lt; back</div>\n`;
    
    if (section === 'welcome') {
        content.innerHTML = `
        > welcome to UNDERFLOW terminal
        `;
        return;
    }

    if (section === 'about') {
        content.innerHTML = backBtn + `
        > about
        -----------------------------
        Based in Seoul\nshoegaze, city rock\n\n[UNDERFLOW]는 소외, 얕은 관계성, 이해관계와 피로, 일상의 과한 투명도와 흩어지는 자아에 대해 말합니다.우리의 음악엔 언제나 곁에 있어왔던 작은 부조리들과 혼란에 대한 반항이 담겨 있습니다.각자의 세계 속 내밀한 단면들, 그리고 그것들을 둘러싼 넓은 사회상과 전경 저변으로 흩어진 사람들의 희미한 흔적에 관하여, 우린 듣는 이들에게 소상히 전달드리고자 합니다.\n\n[UNDERFLOW] tells about the broad societal landscape that surrounds us and the faint traces of people scattered in the background.
        `;
    } else if (section === 'songs') {
        content.innerHTML = backBtn + `
        > songs
        -----------------------------
        <ul>
            <li onclick="showSong('shadow')">1. 그림자(Shadow)</li>
            <li onclick="showSong('urbanfairytale')">2. 도시동화(urbanfairytale)</li>
            <li onclick="showSong('eoltteol')">3. 얼떨결에</li>
            <li onclick="showSong('oddrun')">4. Odd Run</li>
            <li onclick="showSong('ireohji')">5. 이렇지</li>
            <li onclick="showSong('ifeellove')">6. I Feel Love</li>
            <li onclick="showSong('soom')">7. Soom</li>
            <li onclick="showSong('ssauji')">8. 싸우지말아요</li>
            <li onclick="showSong('intro')">9. Intro</li>
            <li onclick="showSong('balhwa')">10. 발화</li>
            <li onclick="showSong('morgan')">11. Morgan</li>
        </ul>
        `;
    } else if (section === 'contact') {
        content.innerHTML = backBtn + `
        > contact
        -----------------------------
        E-Mail : band.underflow@gmail.com
        Instagram : @under__flow
        `;
    }
}
function showSong(song) {
    const content = document.getElementById('content');
    const backBtn = `<div class="back-button" onclick="showSection('songs')">&lt; back</div>\n`;

    const songs = {
        shadow: "그림자 (Shadow)",
        urbanfairytale: "도시동화 (urbanfairytale)",
        eoltteol: "얼떨결에",
        oddrun: "Odd Run",
        ireohji: "이렇지",
        ifeellove: "I Feel Love",
        soom: "Soom",
        ssauji: "싸우지 말아요",
        intro: "Intro",
        balhwa: "발화",
        morgan: "Morgan"
    };

    const lyrics = {
        shadow: `나의 봄, 빛을 그려요\n쉼없이 피어난 꽃 맘으로\n\n내 어릴적\n비스무리 가던길\n옆으로 치운채로\n새로 가꾼\n방으로\n새벽과 오전의 \n떨림을 지운채로\n\n보이는\n어두운 벽\n못 부른 곡과\n말을 잃은 채\n머물던 섬\n고요한 너와 \n\n나의 봄, 빛을 그려요\n쉼없이 피어난 꽃 맘으로\n\n사랑한다던 말을 잊고\n어딜 떠나버렸나\n못 잊은 손\n지겹던 몸은 다\n\n나의 봄, 빛을 그려요\n쉼없이 피어난 꽃 맘으로`,
        urbanfairytale: `많은 걸 포기했는데\n남은건 내게 없네\n어디로 갔나\n져버렸나봐\n\n닮은걸 좇아봤는데\n다른걸 깨닳았네\n우리는 아무 멋도 없어\n잊을만하면 기어코 (잊을만하던 기억도)\n\n도시의 테두린 더 말라가고\n미끄러 넘어진 넌 기회v는 없어\n우린 여기 길을 잃었고\n위태로운(부끄런) 맘은 더 갈데 못찾네 `,
        eoltteol: `우리는 섬으로 갔지\n낮에는 술을 마시지\n우리는 어디로 갔나\n낮은 해를 더 보았지\n\n이만큼 아파\n살려는 달라\n\n오 맘이 가여워\n이 도시가 또 잠에 드는 건\n오 나는 어려워\n난 다시 여기 살고싶진 않아\n\n우리는 섬으로 갔지\n낮에는 술을 마셨지\n우리는 어디로 가나\n남은 밤을 지샜지 오\n\n이만큼 아파\n살려는 달라\n어딘가 아파\n살려는 달라`,
        oddrun: `none`,
        ireohji: `이렇지가\n이렇지가 않아\n이렇지가\n이렇지 않을 시나리오\n\n이렇지가\n이렇지가 않아\n\n지나가는 나의 새빨간 욕구가\n휘파람이라 아스라이\n\n민낯이 된 날 세상이 더\n아마 이대로 싫어하나\n\n해가 이대로 지나가 이 맘\n가시로 둘러 쌓이고\n내가 이 미로 안으로 들어와\n갈피를 이내 잃어\n겁이나니\n겁이나니\n\n이렇지가\n이렇지가 않아\n이렇지가\n이렇지 않을 시나리오\n\n지나가는 나의 새빨간 욕구가\n휘파람이라 아스라이\n\n민낯이 된 날 세상이 더\n아마 이대로 싫어하나`,
        ifeellove: `I lost hometown babe\nno need sorry thanks\nMy friends left with words\nthis city make us go back\n\ncant help giving my heart more than half\nnever getting loud for this\nI can take entire love to you\n\nand this time\nI feel love \nAnd I feel love\non the sunshine\n\nmore love\nyou will love\nand i will cry\ndivin to yall\n\nI lost hometown babe\nno need sorry thanks\nMy friends left with words\nthis city make us go back\n\ncant help giving my heart more than half\nnever getting loud for this\nI can take entire love to you\n\nand this time\nI feel love\nAnd I feel love\non the sunshine\n\nmore love\nyou will love\nand i will cry\ndivin to yall`,
        soom: `말이 없던 밤\n쉬지 않고 뛴 숨\n\n말이 없던 밤\n쉬지 않고 뛴 숨\n\n마음이 날 더 울려`,
        ssauji: `\n싸우지 말아요 우리 모두\n나를 더 안아요 우리의\n숨결 속의 맘을 아나요\n\n나를 더 알아요 우리 모두\n눈을 더 보아요 우리의\n숨긴 뒤의 맘은 낫나요\n\n싸우지 말아요 우리 모두\n나를 더 안아요 우리의\n숨결 속의 맘을 아나요\n\ndivin to the city and you feelin alone\nnah you dont know me\n\nI dont know you wake up in this city alone\nwhere do you find love`,
        intro: `가리운 빛과 동공 위 지도\n추억과 신파 \nどうでもいいよ\n\n따분한 뭍과 돌아올 피로\n중력과 빈 잔\nどうでもいいよ`,
        balhwa: `시간이 지나고 이 낮이 오면\n봄꽃이고 오고 떠나지 않았는데\n\n소리없이 나 더욱이 사라지네\n\n잊은 밤이 오고\n어젯 말은 지워\n우리 맘은 여기 서 있나\n\n나를 나를 나를 여기 묻어줘\n말을 말을 아무 말을 뱉어\n우리의 밤은 지나고\n나는 여기에 있어\n나를 나를 나를 불러줘요\n\n봄이 오던말던\n우린 따듯함을\n\n밤이 오던말던\n우린 고요함을\n\n나를 나를 나를 여기 묻어줘\n말을 말을 아무 말을 뱉어\n우리의 이 밤은 다시 오지만\n난 잊고싶어\n다른 다른 나를 불어줘요`,
        morgan: `Things’d not be okay\nI don’t think it’d be easy\n\nEverything goes higher\nIt will make us tired\nI know there’s a liar\n\nFeel goes on highway\nOh did you love her\nIt's not forever\nthat you desired\n\nyou got no power\nlike this long summer\nwaiting october\nwhile you desire\n\nFeel goes on highway\nOh did you love her\nIt's not forever\nthat you desired\n\nyou got no power\nlike this long summer\nwaiting october\nwhile you desire`
    };

    const songImageNumbers = {
        shadow: '1.jpg',
        urbanfairytale: '2.jpeg',
        eoltteol: '3.jpeg',
        oddrun: '4.jpg',
        ireohji: '5.jpeg',
        ifeellove: '6.jpeg',
        soom: '7.jpeg',
        ssauji: '8.jpg',
        intro: '9.jpeg',
        balhwa: '10.jpeg',
        morgan: '11.jpeg'
    };

    const imgSrc = `images/image${songImageNumbers[song]}`;

    content.innerHTML = backBtn + `
    <div class="song-title">&gt; ${songs[song]}</div>
    <div class="divider">-----------------------------</div>
    <div class="song-content">
        <img src="${imgSrc}" alt="${songs[song]}">
        <div class="lyrics">
            <p>lyrics:<br>${lyrics[song].replace(/\n/g, '<br>')}</p>
            ${song === 'shadow' ? `<div class="bandcamp" style="margin-top: 20px;">
                <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1678211662/size=small/bgcol=333333/linkcol=ffffff/transparent=true/" seamless>
                    <a href="https://underfloww.bandcamp.com/album/shadow">Shadow(그림자) by underflow(언더플로우)</a>
                </iframe>
            </div>` : ''}
        </div>
    </div>
`;
            }

function addCursor() {
    const content = document.getElementById('content');
    if (!content.querySelector('.cursor')) {
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.textContent = '|';
        content.appendChild(cursor);
    }
}
