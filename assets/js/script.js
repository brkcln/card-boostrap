let counts = setInterval(updated, 2000); // 3 saniye de bir
let count = setInterval(update, 1000); // 2 saniye de bir
let follow = 80;
let likes = 803;

//  follow function
function updated() {
	var counts = document.getElementById("card-follow");
	counts.innerHTML = ++follow;
	//  500 e gelince sıfırla
	if (follow === 500) {
		clearInterval(counts);
	}
}
//  likes  function
function update() {
	var count = document.getElementById("card-likes");
	count.innerHTML = ++likes;
	//  1500 e gelince sıfırla
	if (likes === 1500) {
		clearInterval(count);
	}
}
