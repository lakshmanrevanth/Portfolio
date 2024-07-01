import React from 'react'
import styles from './cubeComponent.module.css'

const CubeComponent: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cube}>
				<div style={{ '--x': -1, '--y': 0 } as React.CSSProperties}>
					<span style={{ '--i': 3 } as React.CSSProperties}></span>
					<span style={{ '--i': 2 } as React.CSSProperties}></span>
					<span style={{ '--i': 1 } as React.CSSProperties}></span>
				</div>
				<div style={{ '--x': 0, '--y': 0 } as React.CSSProperties}>
					<span style={{ '--i': 3 } as React.CSSProperties}></span>
					<span style={{ '--i': 2 } as React.CSSProperties}></span>
					<span style={{ '--i': 1 } as React.CSSProperties}></span>
				</div>
				<div style={{ '--x': 1, '--y': 0 } as React.CSSProperties}>
					<span style={{ '--i': 3 } as React.CSSProperties}></span>
					<span style={{ '--i': 2 } as React.CSSProperties}></span>
					<span style={{ '--i': 1 } as React.CSSProperties}></span>
				</div>
			</div>
			<div className={styles.cube}>
				<div style={{ '--x': -1, '--y': 0 } as React.CSSProperties}>
					<span style={{ '--i': 3 } as React.CSSProperties}></span>
					<span style={{ '--i': 2 } as React.CSSProperties}></span>
					<span style={{ '--i': 1 } as React.CSSProperties}></span>
				</div>
				<div style={{ '--x': 0, '--y': 0 } as React.CSSProperties}>
					<span style={{ '--i': 3 } as React.CSSProperties}></span>
					<span style={{ '--i': 2 } as React.CSSProperties}></span>
					<span style={{ '--i': 1 } as React.CSSProperties}></span>
				</div>
				<div style={{ '--x': 1, '--y': 0 } as React.CSSProperties}>
					<span style={{ '--i': 3 } as React.CSSProperties}></span>
					<span style={{ '--i': 2 } as React.CSSProperties}></span>
					<span style={{ '--i': 1 } as React.CSSProperties}></span>
				</div>
			</div>
			<div className={styles.cube}>
				<div style={{ '--x': -1, '--y': 0 } as React.CSSProperties}>
					<span style={{ '--i': 3 } as React.CSSProperties}></span>
					<span style={{ '--i': 2 } as React.CSSProperties}></span>
					<span style={{ '--i': 1 } as React.CSSProperties}></span>
				</div>
				<div style={{ '--x': 0, '--y': 0 } as React.CSSProperties}>
					<span style={{ '--i': 3 } as React.CSSProperties}></span>
					<span style={{ '--i': 2 } as React.CSSProperties}></span>
					<span style={{ '--i': 1 } as React.CSSProperties}></span>
				</div>
				<div style={{ '--x': 1, '--y': 0 } as React.CSSProperties}>
					<span style={{ '--i': 3 } as React.CSSProperties}></span>
					<span style={{ '--i': 2 } as React.CSSProperties}></span>
					<span style={{ '--i': 1 } as React.CSSProperties}></span>
				</div>
			</div>
		</div>
	)
}

export default CubeComponent
