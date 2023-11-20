var Team = React.createClass({
	render: function() {
		return(
			<div id="team">
				<div id="team-img1" data-wow-delay="0s" className="wow offset animate__animated animate__fadeInDown"  width="100%"></div>
				<div className="main-text1 offset wow animate__animated animate__backInUp leather">
					<center>
						<h1>Главный дизайнер (Creative Director):</h1>
						<h3>
						Он обычно берет на себя ответственность за общее творческое руководство командой разработки, включая решения об арте, игровом дизайне и сюжете.
						</h3>
					</center>
				</div>
				<div id="team-img2" data-wow-delay="0s" className="wow offset animate__animated animate__bounceInRight"  width="100%"></div>
				<div className="main-text1 offset wow animate__animated animate__backInLeft">
					<center>
						<h1>Персональный менеджер проекта (Project Manager):</h1>
						<h3>
						Он отвечает за общий ход проекта, руководство командой и управление ресурсами. Менеджер проекта обеспечивает тесное взаимодействие всех отделов и отслеживает ход выполнения проект
						</h3>
					</center>
				</div>
				<div id="team-img3" data-wow-delay="0s" className="wow offset animate__animated animate__lightSpeedInRight"  width="100%"></div>
				<div className="main-text1 offset wow animate__animated animate__flipInX red">
					<center>
						<h1>Главный программист (Lead Programmer):</h1>
						<h3>
						В своем роли, главный программист координирует программистов и зачастую работает над более сложными задачами программирования. Они отвечают за создание кода и инструментов, которые позволяют другим участникам команды создавать игровые элементы и функции.
						</h3>
					</center>
				</div>
			</div>
		);
	}
});
