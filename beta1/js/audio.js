const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');
// link ảnh cd mặc định
const ulrthumcd="src/img_cd.jpg"
var songIndex=0;

// Song titles
const listAlbum = [
        {
          name:"DT 5 - Thời Học Sinh",
          urlCD:ulrthumcd,
          songs:[
                      {
                        name:"Nụ Cười 18 20 - Doãn Hiếu",
                        url:"https://data3.chiasenhac.com/downloads/2098/3/2097690-49bc7da2/128/Nu%20Cuoi%2018%2020%20-%20Doan%20Hieu.mp3",
                      },
                      {
                        name:"Tháng Năm Không Quên - H2K, KN",
                        url:"https://tainhac123.com/download/thang-nam-khong-quen-cover-do-dinh-luan.7Ez6Uh8HjjpT.html",
                      },
                      {
                        name:"Tháng Năm Không Trở Lại - The Wall Nutszz",
                        url:"https://data38.chiasenhac.com/downloads/1911/6/1910254-b83c8f16/128/Thang%20Nam%20Khong%20Tro%20Lai%20-%20The%20Wall%20Nutsz.mp3",

                      },
                      {
                        name:"Mình Cùng Nhau Đóng Băng - Thuỳ Chi",
                        url:"https://data38.chiasenhac.com/downloads/1911/6/1910061-92a9340a/128/Minh%20Cung%20Nhau%20Dong%20Bang%20-%20Thuy%20Chi.mp3",
                      },
                      {
                        name:"Mong Ước Kỷ Niệm Xưa - Đinh Khải Anh, Thanh Hà",
                        url:"https://nhacpro.me/stream/b7bh.mp3",

                      },

                      


                ],

        },
                {
          name:"DT 4 - Sky Tour 2019",
          urlCD:"https://data.chiasenhac.com/data/cover/123/122398.jpg",
          songs:[
                        {
                          name:"Chạy Ngay Đi (Sky Tour 2019) - Sơn Tùng M-TP",
                          url:"https://data3.chiasenhac.com/downloads/2096/0/2095003-987d05cc/128/Chay%20Ngay%20Di%20Sky%20Tour%202019_%20-%20Son%20Tung%20M.mp3",
                        },
                        {
                          name:"Chúng Ta Không Thuộc Về Nhau (Sky Tour 2019) - Sơn Tùng M-TP",
                          url:"https://data3.chiasenhac.com/downloads/2096/0/2095004-7d9111a3/128/Chung%20Ta%20Khong%20Thuoc%20Ve%20Nhau%20Sky%20Tour%2020.mp3",
                        },
                        {
                          name:"Lạc Trôi (Sky Tour 2019) - Sơn Tùng M-TP",
                          url:"https://data3.chiasenhac.com/downloads/2096/0/2095005-df268b10/128/Lac%20Troi%20Sky%20Tour%202019_%20-%20Son%20Tung%20M-TP.mp3",
                        },
                        {
                          name:"Chắc Ai Đó Sẽ Về (Sky Tour 2019) - Sơn Tùng M-TP",
                          url:"https://data3.chiasenhac.com/downloads/2096/0/2095007-29e96d54/128/Chac%20Ai%20Do%20Se%20Ve%20Sky%20Tour%202019_%20-%20Son%20Tu.mp3",
                        },
                        {
                          name:"Em Của Ngày Hôm Qua (Sky Tour 2019) - Sơn Tùng M-TP",
                          url:"https://data3.chiasenhac.com/downloads/2096/0/2095008-002bcd30/128/Em%20Cua%20Ngay%20Hom%20Qua%20Sky%20Tour%202019_%20-%20Son.mp3",
                        },
                        {
                          name:"Hãy Trao Cho Anh (Sky Tour 2019) - Sơn Tùng M-TP",
                          url:"https://data3.chiasenhac.com/downloads/2096/0/2095009-9a93633c/128/Hay%20Trao%20Cho%20Anh%20Sky%20Tour%202019_%20-%20Son%20Tu.mp3",
                        },
                        {
                          name:"Remember Me (Sky Tour 2019) - Sơn Tùng M-TP",
                          url:"https://data3.chiasenhac.com/downloads/2096/0/2095006-c6b77ca6/128/Remember%20Me%20Sky%20Tour%202019_%20-%20Son%20Tung%20M-.mp3",
                        },
                ],
        },
                {
          name:"DT 3 - Nhớ Quê",
          urlCD:ulrthumcd,
          songs:[
                        {
                          name:"Đêm Qua Con Nằm Mơ - DIMZ, NH4T",
                          url:"https://data25.chiasenhac.com/download2/2207/0/2206294-807d1919/128/Dem%20Qua%20Con%20Nam%20Mo%20-%20DIMZ_%20NH4T.mp3",
                        },
                        {
                          name:"The Ninghts (Viet ver) - DIMZ",
                          url:"https://dl.tainhacvip.com/wp-content/uploads/Mot-Ngay-Khong-Xa-Toi-Ve-Noi-Chon-Que-Thanh-Binh-Remix-DIMZ.mp3",

                        },
                        {
                          name:"Đi Về Nhà - Đen, JustaTee",
                          url:"https://data.chiasenhac.com/down2/2179/6/2178291-6e126457/128/Di%20Ve%20Nha%20-%20Den_%20JustaTee.mp3",
                        },
                        
                        
                ],
        },
                {
          name:"DT 2 - Tới Bến",
          urlCD:ulrthumcd,
          songs:[
                        {
                          name:"Thay Lòng - DIMZ, TVk, NH4T",
                          url:"https://data25.chiasenhac.com/download2/2199/4/2198058-9875bc7e/128/Thay%20Long%20-%20DIMZ_%20TVk_%20NH4T.mp3",

                        },
                        {
                          name:"Yêu Là Cưới - Phát Hồ",
                          url:"https://data25.chiasenhac.com/download2/2194/4/2193057-a299c22d/128/Yeu%20La%20Cuoi%20-%20Phat%20Ho.mp3",
                        },
                        {
                          name:"Cưới Luôn Được Không - YuniBoo, Goctoi Mixer",
                          url:"https://data25.chiasenhac.com/download2/2196/4/2195948-b475e059/128/Cuoi%20Luon%20Duoc%20Khong_%20-%20YuniBoo_%20Goctoi.mp3",
                        },
                        {
                          name:"Cưa Là Đổ - Phát Hồ, X2X",
                          url:"https://data25.chiasenhac.com/download2/2202/4/2201809-cc4f108b/128/Cua%20La%20Do%20-%20Phat%20Ho_%20X2X.mp3",
                        },
                        {
                          name:"Thương Nhau Tới Bến - Nal",
                          url:"https://data25.chiasenhac.com/download2/2192/4/2191345-016f8f1f/128/Thuong%20Nhau%20Toi%20Ben%20-%20Nal.mp3",
                        },
                        {
                          name:"Túp Lều Vàng - Nguyễn Đình Vũ, ACV",
                          url:"https://data.chiasenhac.com/down2/2192/2/2191517-f4126c1d/128/Tup%20Leu%20Vang%20-%20Nguyen%20Dinh%20Vu_%20ACV.mp3",
                        },
                        {
                          name:"Rồi Tới Luôn - Nal",
                          url:"https://data.chiasenhac.com/down2/2184/4/2183350-8f1f7103/128/Roi%20Toi%20Luon%20-%20Nal.mp3",
                        },
                ],
        },
        {
          name:"DT 1 - DatKaa",
          urlCD:"https://35express.org/wp-content/uploads/2021/06/datkaa-la-ai-2-35express.jpg",
          songs:[
                      {
                        name:"Hạ Còn Vương Nắng",
                        url:"https://data.chiasenhac.com/down2/2164/3/2163098-c46e1827/128/Ha%20Con%20Vuong%20Nang%20-%20DatKaa.mp3",

                      },
                      {
                        name:"Đường Quyền Tình Yêu",
                        url:"https://data3.chiasenhac.com/downloads/2094/3/2093504-6424030b/128/Duong%20Quyen%20Tinh%20Yeu%20-%20DatKaa_%20QT%20Beatz.mp3",

                      },
                      {
                        name:"Dừng Thương",
                        url:"https://data20.chiasenhac.com/downloads/2082/3/2081074-9e3e3192/128/Dung%20Thuong%20-%20DatKaa.mp3",
                      },
                      {
                        name:"Chiều Thu Họa Bóng Nàng",
                        url:"https://data16.chiasenhac.com/downloads/2140/3/2139377-bfcf51a5/128/Chieu%20Thu%20Hoa%20Bong%20Nang%20-%20DatKaa.mp3",
                      },
                                            {
                        name:"Đông Phai Mờ Dáng Ai (Chiều Thu Họa Bóng Nàng 2)",
                        url:"https://data25.chiasenhac.com/download2/2201/2/2200372-524bf1b2/128/Dong%20Phai%20Mo%20Dang%20Ai%20Chieu%20Thu%20Hoa%20Bong.mp3",
                      },
                      {
                        name:"Người Có Thương",
                        url:"https://data3.chiasenhac.com/downloads/2108/3/2107981-57d917d7/128/Nguoi%20Co%20Thuong%20-%20DatKaa.mp3",
                      },
                ],

        },



        
];
// Keep track of song

// Initially load song details into DOM
// loadSong(songs[songIndex]);


// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0 ) {
   listAlbum[albumIndex].songs.length - 1;
  }

  load(songIndex);  
  playSong();
}


// Next song
function nextSong() {
  songIndex++;

  if (songIndex > listAlbum[albumIndex].songs.length - 1) {
    songIndex = 0;
  }

  load(songIndex);  
  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', endedSong);
function endedSong() {
  if (songIndex == listAlbum[albumIndex].songs.length - 1) {
    pauseSong();
    songIndex = 0;
    load(songIndex);
  }
  else{
    nextSong();
  }
}
// Time of song
audio.addEventListener('timeupdate',DurTime);

// Render Album /////////////////////////////////////////////////////////////////////////////
var albumIndex=0;
function renderAlbum(){
  const ren1 = listAlbum.map((song1,index) =>{
    return `<div class="album" onclick="a1(${index})">
        <div class="class_imgAlbum"><img src="${song1.urlCD}" alt="album-cover" id="id_imgAlbum"></div>
        <h2 class="titleAlbum">${song1.name}</h2>
        
    </div>`
  });
  document.getElementsByClassName('class_listAlbum')[0].innerHTML = ren1.join('');
  document.getElementById('cover').src=listAlbum[albumIndex].urlCD;
  document.getElementById('nameAlbum').innerHTML=`Album playing: ${listAlbum[albumIndex].name}`;
}
renderAlbum();



// Render danh sách bài hát trong Album hiện tại //////////////////////////////////////////////////////
function renderSongsAlbum(){
  const ren2 = listAlbum[albumIndex].songs.map((song1, index) =>{
    return `<div class="song">
        <h3 class="title">${index+1}. ${song1.name}</h3>
    </div>`
  });
  document.getElementsByClassName('list-info')[0].innerHTML = ren2.join('')
}
renderSongsAlbum();

// Load bài hát trong album vào audio player /////////////////////////////////////////////////////////////////////////////
var songIndex=0;
function load(num){
    title.innerText=listAlbum[albumIndex].songs[num].name;
    var a=listAlbum[albumIndex].songs[num].url;
    a=a.replace('/0/',`/${new Date().getDay()}/`);
	a=a.replace('/1/',`/${new Date().getDay()}/`);
	a=a.replace('/2/',`/${new Date().getDay()}/`);
    a=a.replace('/3/',`/${new Date().getDay()}/`);
    a=a.replace('/4/',`/${new Date().getDay()}/`);
    a=a.replace('/5/',`/${new Date().getDay()}/`);
    a=a.replace('/6/',`/${new Date().getDay()}/`);
    document.getElementById('audio').src=a;
}
load(songIndex);

// Load album khi click ////////////////////////////////////////////////////////////
function a1(a2) {  
	albumIndex=a2;
	songIndex=0;
	load(songIndex);
	renderSongsAlbum();
	document.getElementById('nameAlbum').innerHTML=`Album playing: ${listAlbum[albumIndex].name}`;
	document.getElementById('cover').src=listAlbum[albumIndex].urlCD;
	playSong(); 
    } ;

// cuộn ngang khi lăn chuột ở listAlbum ////////////////////////////////////////////////////////
const cuonngang = document.getElementById('id_divclass_listAlbum');

cuonngang.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    cuonngang.scrollLeft += evt.deltaY;
});


const listBtn = document.getElementById('list');
function listOpen() {
  musicContainer.classList.add('listOn');
  listBtn.querySelector('i.fas').classList.remove('fa-align-justify');
  listBtn.querySelector('i.fas').classList.add('fa-times');
}


function listClose() {
  musicContainer.classList.remove('listOn');
  listBtn.querySelector('i.fas').classList.add('fa-align-justify');
  listBtn.querySelector('i.fas').classList.remove('fa-times');
}

listBtn.addEventListener('click', () => {
  const list_on = musicContainer.classList.contains('listOn');

  if (list_on) {
    listClose();
  } else {
    listOpen();
  }
});
