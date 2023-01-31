import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function handleClick(value, type) {
	const quantity = value < 2 ? 'peu' : value < 3 ? 'modèrement' : 'beaucoup'
	const element = type ==='water' ? "d'arrosage" : "de lumière";
	alert(`Cette plante requiert ${quantity} ${element}. Il s'agit d'un composant de type : ${type}`)
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() => handleClick(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
