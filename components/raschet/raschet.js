var Raschet = React.createClass({
	render: function() {
		return(
			<div>
				<img id="raschet-button-close" className="unselectable invert" src="./icons/x.svg"></img>
				<h1>Форма расчета стоимости игры</h1>
				<div id="raschet-box">
					Тип игры:&nbsp;&nbsp;&nbsp;
					<select id="platform">
						<option value="1">Мобильная</option>
						<option value="2">Компьютерная</option>
						<option value="3">Консольная</option>
						<option value="4">Мобильная и Компьютерная</option>
						<option value="5">Компьютерная и Консольная</option>
						<option value="6">Moбильная, Компьютерная и Консольная</option>
					</select>
					<br></br><br></br>
					Бюджет игры:&nbsp;&nbsp;&nbsp;
					<select id="budget">
						<option value="1">Инди</option>
						<option value="2">A</option>
						<option value="3">AA</option>
						<option value="4">AAA</option>
						<option value="5">AAAA</option>
					</select>
					<br></br><br></br>
					Рекламная кампания:&nbsp;&nbsp;&nbsp;
					<select id="ads">
						<option value="1">Небольшая</option>
						<option value="2">Умеренная</option>
						<option value="3">Масштабная</option>
						<option value="4">Агрессивная</option>
					</select>
					<br></br><br></br>
					Итог:&nbsp;&nbsp;<span id="result"></span>
					<br></br><br></br>
					<button onClick={() => raschitat()} id="raschitat-button">Рассчитать</button>
					<br></br><br></br>
				</div>
			</div>
		);
	}
});
