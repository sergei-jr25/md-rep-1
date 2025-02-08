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
		</div>
	)
}
export default App
