import React, { useState } from 'react';

function App() {
	const [skill, setSkill] = useState('');
	const [mySkills, setMySkills] = useState([]);

	function handleAddSkill(event) {
		if (event) event.preventDefault();
		setMySkills([...mySkills, skill]);
		setSkill('');
	}

	function handleClearMySkills() {
		setMySkills([]);
	}

	return (
		<div className="container">
			<div className="header">
				<h1>Intro Cypress React Recife</h1>
			</div>
			<div className="content">
				<div className="actions">
					<input
						name="skill"
						type="text"
						placeholder="Add skill"
						value={skill}
						onChange={e => setSkill(e.target.value)}
					/>
					<button onClick={handleAddSkill}>Add skill</button>
					{mySkills && mySkills.length > 0 && (
						<button onClick={handleClearMySkills}>Remove all</button>
					)}
				</div>
				<div className="skill-list">
					{mySkills && mySkills.length > 0 ? (
						<ul>
							{mySkills.map((skill, index) => (
								<li key={index}>{skill}</li>
							))}
						</ul>
					) : (
						<p>Empty List</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
