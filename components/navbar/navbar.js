var Navbar = React.createClass({ // lol
	render: function() {
		return(
			<div id="header">
				<h2 className="unselectable" style={{fontWeight: 800}}><a onClick={() => redirect(1)}>GameSmiths</a></h2>
				<img className="burger-menu-button invert" id="burger-menu-open" src="../../icons/burger.svg"></img>
				<div id="navbar">
					<ul>
						<li><a className="unselectable" onClick={() => redirect(1)}>Главная</a></li>
						<li><a className="unselectable" onClick={() => redirect(2)}>О нас</a></li>
						<li><a className="unselectable" onClick={() => redirect(3)}>Игры</a></li>
						<li><a className="unselectable" onClick={() => redirect(4)}>Команда</a></li>
						<li><a className="unselectable" onClick={() => redirect(5)}>Контакты</a></li>
					</ul>
				</div>
			</div>
		);
	}
});
