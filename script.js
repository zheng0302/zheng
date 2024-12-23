let currentIndex = 0;

        function startSlideshow() {
            const profileImages = document.querySelectorAll('.profile img');
            setInterval(() => {
                profileImages[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % profileImages.length;
                profileImages[currentIndex].classList.add('active');
            }, 2000);
        }

        function startKoreaSlideshow() {
            const koreaImages = document.querySelectorAll('#Korea img');
            let koreaIndex = 0;

            setInterval(() => {
                koreaImages[koreaIndex].classList.remove('active');
                koreaIndex = (koreaIndex + 1) % koreaImages.length;
                koreaImages[koreaIndex].classList.add('active');
            }, 2200);
        }

        let idolText = document.querySelector('.idol');
        let idolInterval;
        function showIdols() {
            const idols = ["宋雨琦", "G-idle", "aespa", "IVE", "AKMU","金鐘國","seventeen","金采源","BLACKPINK"];
            let index = 0;

            idolInterval = setInterval(() => {
                idolText.textContent = `我的偶像: ${idols[index]}`;
                index = (index + 1) % idols.length;
            }, 2050);
          isIdolActive = true;
        }

         function stop() {
            clearInterval(idolInterval);
            idolText.textContent = "偶像顯示已停止";
            isIdolActive = false;
        }

        function resume() {
            if (!isIdolActive) {
                showIdols();
            }
        }

        window.onload = function () {
            startSlideshow();
            startKoreaSlideshow();
            showIdols();
        };