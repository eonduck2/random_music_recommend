// ? 바로 직전 가수로 옮겨갔을 때 텍스트 컨텍스트 어떻게 처리할건지 ?
const main_img = document.querySelector("#main_img");
const playBack_button = document.querySelector("#music_playBack");
const play_button = document.querySelector("#music_play");
const sound_wave = document.querySelector(`#sound_wave`);
const div_for_contents_caption2 = document.querySelector(
  "#for_contents_caption2"
);
const singer_for_caption = document.querySelector("#singer_for_caption");
const song_for_caption = document.querySelector("#song_for_caption");
const lyrics_for_highlight = document.querySelector("#lyrics_for_highlight");
// ! 추가할 때
// * 랜덤 가수
const olivia_rodrigo = `Olivia_Rodrigo_Sour_Album_Cover.png`;
const swervy = `Swervy_blue_cover.jpg`;
const swervy_january_embers = `Swervy_january_embers_cover.jpg`;
const taylor_swift = `taylor_swift_cruel_summer_album_cover.jpg`;
const illit = `illit_magnetic_cover.jpg`;
const lil_nas_x = `Lil_Nas_X_Sun_Goes_Down_Cover.png`;
const ichiko_aoba = `ichiko_aoba_hizumi_cover.jpg`;
const boys_in_the_kitchen = `boys_in_the_kitchen_bivo_cover.jpg`;
const unofficial_boy = `unofficial_boy_mmm_cover.jpg`;
const post_malone = `pm_sunflower_album_cover.jpg`;
// ! 추가할 때
// * 랜덤 가수 앨범 커버 이미지들 배열
const random_covers = [
  olivia_rodrigo,
  swervy,
  illit,
  lil_nas_x,
  ichiko_aoba,
  swervy_january_embers,
  taylor_swift,
  boys_in_the_kitchen,
  unofficial_boy,
  post_malone,
];

// * 이전에 나온 가수를 등록해두기 위한 배열
let save_singers = [];

// ! 추가할 때
// * 선택된 노래 유튜브 링크
const olivia_drivers_license_youtube = `https://www.youtube.com/watch?v=ZmDBbnmKpqQ`;
const swervy_blue_youtube = `https://www.youtube.com/watch?v=YNXW9mxsLqI&list=PLslFx6Q4h1tt1aZ0CA4qf62xPnyURPI4n`;
const swervy_january_embers_youtube = `https://www.youtube.com/watch?v=RB1ZaqRi444`;
const post_malone_sunflower_youtube = `https://www.youtube.com/watch?v=ApXoWvfEYVU`;
const taylor_swift_cruel_summer_youtube = `https://www.youtube.com/watch?v=ic8j13piAhQ`;
const boys_in_the_kitchen_bivo_youtube = `https://www.youtube.com/watch?v=9ufvQcSu39I`;
const unofficial_boy_mmm_youtube = `https://www.youtube.com/watch?v=b63RXHteeQ0`;
const illit_magnetic_youtube = `https://www.youtube.com/watch?v=Vk5-c_v4gMU`;
const lil_nas_x_sun_goes_down_youtube = `https://www.youtube.com/watch?v=U3BVFY9wnTw`;
const ichiko_aoba_hizumi_youtube = `https://www.youtube.com/watch?v=w4nTKi07ogQ`;

// * 가수 이름 classList
const singer_classList = `singer_pTag`;

// * 플레이 버튼 클릭 시, 이벤트 감지
play_button.onclick = () => {
  let random_covers_pick =
    random_covers[Math.floor(Math.random() * random_covers.length)];

  checkFuncs.singerCheck(random_covers_pick);
  main_img.src = `Images/covers/${random_covers_pick}`;
};

// ! 추가할 때
sound_wave.onclick = () => {
  // * 배열 돌려서 찾아내서 그 값을 비교해야 할 듯
  for (let i = 0; i <= save_singers.length; i++) {
    if (save_singers[0] == olivia_rodrigo) {
      window.open(olivia_drivers_license_youtube);
    } else if (save_singers[0] == swervy) {
      window.open(swervy_blue_youtube);
    } else if (save_singers[0] == swervy_january_embers) {
      window.open(swervy_january_embers_youtube);
    } else if (save_singers[0] == taylor_swift) {
      window.open(taylor_swift_cruel_summer_youtube);
    } else if (save_singers[0] == illit) {
      window.open(illit_magnetic_youtube);
    } else if (save_singers[0] == lil_nas_x) {
      window.open(lil_nas_x_sun_goes_down_youtube);
    } else if (save_singers[0] == ichiko_aoba) {
      window.open(ichiko_aoba_hizumi_youtube);
    } else if (save_singers[0] == boys_in_the_kitchen) {
      window.open(boys_in_the_kitchen_bivo_youtube);
    } else if (save_singers[0] == unofficial_boy) {
      window.open(unofficial_boy_mmm_youtube);
    } else if (save_singers[0] == post_malone) {
      window.open(post_malone_sunflower_youtube);
    } else {
    }
  }
};
// ! 추가할 때
/** 함수 모아놓는 객체 */
let checkFuncs = {
  /** 가수 확인 함수 */
  singerCheck: function (singer) {
    let singer_for_check = ``;
    this.save_singer(singer);
    singer_for_caption.classList.add("singer_pTag");
    lyrics_for_highlight.classList.add("lyrics_pTag_every_singer");
    // for (let i = 0; i <= random_covers.length; i++) {
    //   if (random_covers[i] == singer) {
    //     singer_for_check = random_covers[i];
    //     break;
    //   } else {
    //   }

    if (singer == olivia_rodrigo) {
      singer_for_caption.textContent = `Olivia Rodrigo`;
      song_for_caption.textContent = `Driver's license`;
      lyrics_for_highlight.textContent = `"Red lights, stop signs
      I still see your face"`;
    } else if (singer == swervy) {
      singer_for_caption.textContent = `Swervy`;
      song_for_caption.textContent = `파랑`;
      lyrics_for_highlight.textContent = `"난 알기 싫어, 비밀, 그냥 누워서 잤지"`;
    } else if (singer == swervy_january_embers) {
      singer_for_caption.textContent = `Swervy`;
      song_for_caption.textContent = `January Embers`;
      lyrics_for_highlight.textContent = `"일어난 곳이 집인 듯 그렇게 나 살고 있어요"`;
    } else if (singer == taylor_swift) {
      singer_for_caption.textContent = `Taylor Swift`;
      song_for_caption.textContent = `Cruel Summer`;
      lyrics_for_highlight.textContent = `"I don't wanna keep secrets just to keep you
      And I"`;
    } else if (singer == post_malone) {
      singer_for_caption.textContent = `Post Malone, Swae Lee`;
      song_for_caption.textContent = `Sunflower`;
      lyrics_for_highlight.textContent = `"I think your love would be too much"`;
    } else if (singer == boys_in_the_kitchen) {
      singer_for_caption.textContent = `Boys In The Kitchen`;
      song_for_caption.textContent = `Bivo`;
      lyrics_for_highlight.textContent = `"뭐라 지껄이는지 밖에선
      말도 안 되는 대화를 나누고 있어"`;
    } else if (singer == unofficial_boy) {
      singer_for_caption.textContent = `Unofficial Boy`;
      song_for_caption.textContent = `mmm`;
      lyrics_for_highlight.textContent = `"오늘 밤만은 나와 같이 있어 줄래
      Babe if you want me too 다음 날 아침엔 잊어줄게"`;
    } else if (singer == ichiko_aoba) {
      singer_for_caption.textContent = `青葉市子(Ichiko Aoba)`;
      song_for_caption.textContent = `ひずみ`;
      lyrics_for_highlight.textContent = `"ありがとう あなたに ちゃんと言えてはないんだよ"`;
    } else if (singer == lil_nas_x) {
      singer_for_caption.textContent = `Lil Nas X`;
      song_for_caption.textContent = `Sun goes Down`;
      lyrics_for_highlight.textContent = `"Send me a gun and I'll see the sun"`;
    } else if (singer == illit) {
      singer_for_caption.textContent = `아일릿`;
      song_for_caption.textContent = `Magnetic`;
      lyrics_for_highlight.textContent = `"super 이끌림"`;
    } else {
    }

    // ! else if로 등록한 가수 하나 하나 조건식 작성
  },

  /** 바로 직전 가수 배열에 저장 */
  save_singer: function (singer) {
    if (save_singers.length == 0) {
      save_singers.push(singer);
    } else if (save_singers.length !== 0) {
      save_singers = [];
      save_singers.push(singer);
    } else {
    }
    // ! 여기에 함수 하나 연결시켜야됨
  },
};
