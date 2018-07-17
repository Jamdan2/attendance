import Card from 'preact-material-components/Card';
import List from 'preact-material-components/List';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/List/style.css';
import style from './style.scss';

export default ({ people }) => (
	<Card outlined class={style['scroll-box-outer']} style={{ height: '100%' }}>
		<div class={style['scroll-box-inner']}>
			<List>
				{people.map((person, i) => (
					<div>
						<List.Item two-line>
							<List.TextContainer>
								<List.PrimaryText>{person.name}</List.PrimaryText>
								<List.SecondaryText>You have {person.hours} hrs.</List.SecondaryText>
							</List.TextContainer>
						</List.Item>
						{i !== people.length - 1 ? <List.Divider /> : null}
					</div>
				))}
			</List>
		</div>
	</Card>
);
