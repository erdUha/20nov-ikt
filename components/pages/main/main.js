var MainPage = React.createClass({
	render: function() {
		return(
			<div id="main">
				<div className="wow animate__animated animate__fadeInDown" id="main-head">
					<div id="typed-strings">
						<span>GameSmiths</span>
						<span><font style={{fontFamily: "Playfair Display"}}>Создаем игры с душой</font></span>
					</div>
					<center><h1 style={{fontWeight: 800}}><span id="typed"></span></h1></center>
				</div>
				<div id="main-img1" data-wow-delay="0.6s" className="wow animate__animated animate__fadeInLeft"  width="100%"></div>
				<div data-wow-delay="0.8s" className="main-text1 offset wow animate__animated animate__backInLeft">
					<center><h2>Добро пожаловать на официальный веб-сайт команды разработчиков "GameSmiths"!</h2></center>
				</div>
				<div className="main-text2">
					<p data-wow-delay="1.2s" className="offset wow animate__animated animate__zoomInDown" >
						Мы команда опытных и талантливых разработчиков игр, включающую программистов, дизайнеров, тестировщиков и художников, объединенных одним и тем же страстью - создавать незабываемые игровые миры и опыт.
					</p>
				</div>
				<div id="main-img2" className="offset wow animate__animated animate__fadeInRight"  width="100%"></div>
				<div data-wow-delay="0.6s" className="main-text1 offset wow animate__animated animate__backInLeft red">
					<center>
						<h3>
							"GameSmiths" - это место, где идеи воплощаются в жизнь. Мы создаем игры различных жанров и форматов: от мобильных стартапов до крупномасштабных AAA-проектов на разных платформах.
						</h3>
					</center>
				</div>
				<div className="main-text2">
					<p data-wow-delay="0.6s" className="offset wow animate__animated animate__zoomInDown" >
						Мы всегда стремимся к инновациям и используем передовые технологии в качестве движущей силы нашего творчества. Наш подход к разработке игр уникален: мы внимательно слушаем наше сообщество и делаем все возможное, чтобы наши игры были интересными и увлекательными для всех.
					</p>
				</div>
				<div id="main-img3" className="offset wow animate__animated animate__fadeInRight"  width="100%"></div>
				<div data-wow-delay="0.6s" className="main-text1 offset wow animate__animated animate__backInLeft leather">
					<center>
						<h3>
						Здесь вы можете ознакомиться с нашими текущими проектами, узнать больше о нашей команде, исследовать наши предыдущие игры и даже подать заявку, если хотите присоединиться к нашему сообществу разработчиков.
						</h3>
					</center>
				</div>
				<div className="main-text2">
					<p data-wow-delay="0.6s" className="offset wow animate__animated animate__zoomInDown" >
					Мы верим, что великие игры создаются благодаря великим идеям, а также страсти и усердию каждого члена нашей команды. Добро пожаловать в мир "GameSmiths", где игры приходят к жизни!
					</p>
				</div>
			</div>
		);
	}
});
