import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { AboutLazy } from '../pages/About/AboutLazy'

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/about',
				element: (
					<Suspense fallback={<div>...Loading </div>}>
						<AboutLazy />,
					</Suspense>
				),
			},
			,
		],
	},
]

export const router = createBrowserRouter(routes)
export default routes
