// Librairie
import classes from './Skills.module.css';

// Composants
import SectionTitle from '@/components/global/SectionTitle/SectionTitle';
import Skill from '@/components/global/Skill/Skill';

function Skills() {
	// Variable
	const skillsDatas = {
		dev: [
			{
				label: 'développement',
				spanLabel: 'front-end',
				imgName: 'frontend',
			},
			{
				label: 'développement',
				spanLabel: 'back-end',
				imgName: 'backend',
			},
			{
				label: 'développement',
				spanLabel: 'mobile',
				imgName: 'mobile',
			},
			{
				label: 'optimisation',
				spanLabel: 'SEO',
				imgName: 'seo',
			},
		],
		design: [
			{
				label: 'branding',
				imgName: 'branding',
			},
			{
				label: 'wireframing',
				spanLabel: 'et maquettage',
				imgName: 'wireframe',
			},
			{
				label: 'réflexion',
				spanLabel: 'ui/ux',
				imgName: 'ux',
			},
		],
	};

	return (
		<section id="skills" className={classes.Skills}>
			<SectionTitle label="expertise" shape="rectangle" />
			<article className={classes.SkillsContainer}>
				<div className={classes.Dev}>
					{skillsDatas.dev.map((skill, key) => (
						<Skill
							key={key}
							label={skill.label}
							spanLabel={skill.spanLabel}
							imgName={skill.imgName}
						/>
					))}
				</div>
				<div className={classes.Design}>
					{skillsDatas.design.map((skill, key) => (
						<Skill
							key={key}
							label={skill.label}
							spanLabel={skill.spanLabel}
							imgName={skill.imgName}
						/>
					))}
				</div>
			</article>
		</section>
	);
}

export default Skills;
