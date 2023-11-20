var Navpanel = React.createClass({
	render: function() {
		return(
			<div>
				<img className="burger-menu-button invert unselectable" id="burger-menu-button-close" onClick={() => {closeBurgerMenu()}} src="./icons/x.svg"></img>
				<ul>
					<li className="unselectable" onClick={() => redirect(1)}><a>Главная</a></li>
					<li className="unselectable" onClick={() => redirect(2)}><a>О нас</a></li>
					<li className="unselectable" onClick={() => redirect(3)}><a>Игры</a></li>
					<li className="unselectable" onClick={() => redirect(4)}><a>Команда</a></li>
					<li className="unselectable" onClick={() => redirect(5)}><a>Контакты</a></li>
				</ul>
			</div>
		);
	}
});
