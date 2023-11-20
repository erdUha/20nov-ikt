var Games = React.createClass({
	render: function() {
		return(
			<div id="games">
				<div className="main-text1 offset wow animate__animated animate__backInLeft">
					<center>
						<h3>
						У нас за плечами уже несколько успешно выпущенных проектов, а в работе всегда есть новые увлекательные идеи. Мы всегда открыты для обратной связи и предложений, поскольку наша главная цель - создавать игры, которые вас увлекут.
						</h3>
					</center>
				</div>
				<div id="games-img1" data-wow-delay="0.4s" className="wow offset animate__animated animate__fadeInLeft"  width="100%"></div>
				<div className="main-text2">
					<center data-wow-delay="0.7s" className="offset wow animate__animated animate__zoomInDown">
						<p>
						GreenPest Авто
						</p>
						<hr></hr>
						<br></br>
					</center>
				</div>
				<div id="games-img2" data-wow-delay="0" className="wow offset animate__animated animate__bounceInRight"  width="100%"></div>
				<div className="main-text2">
					<center data-wow-delay="0.3s" className="offset wow animate__animated animate__zoomInDown" >
						<p>
						CraftMine
						</p>
						<hr></hr>
						<br></br>
					</center>
				</div>
				<div id="games-img3" data-wow-delay="0s" className="wow offset animate__animated animate__flipInX"  width="100%"></div>
				<div className="main-text2">
					<center data-wow-delay="0.3s" className="offset wow animate__animated animate__zoomInDown">
						<p>
						Chill Birds
						</p>
						<hr></hr>
						<br></br>
					</center>
				</div>
				<div className="main-text1 offset wow animate__animated animate__backInRight red">
					<center>
						<h3>
						Разглядывайте, изучайте, играйте — и наслаждайтесь инновационными игровыми решениями от "GameSmiths". Мы создаем миры, чтобы вы могли исследовать их!
						</h3>
					</center>
				</div>
				<div id="raschetnik">
					<div id="raschetnik-button" onClick={() => openRaschet()}>Открыть форму расчета</div>
				</div>
			</div>
		);
	}
});
