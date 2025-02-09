// import classes from './App.module.scss'

function char(a: number) {
	console.log(a)
}

const App = () => {
	return (
		<div data-testid={'AppTestId'}>
			<h1 data-testid={'AppTitle'} style={{ color: 'red' }}>
				ADMIN MODULE
			</h1>
			<ul>
				<li>item 1</li>
				<li>item 2</li>
				<li>item 3</li>
				<li>item 4</li>
			</ul>
		</div>
	)
}
export default App
