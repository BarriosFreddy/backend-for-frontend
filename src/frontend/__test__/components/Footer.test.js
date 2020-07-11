import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';

describe('<Footer />', () => {
	const footer = mount(<Footer />);

	test('Render Footer Component', () => {
		expect(footer.length).toEqual(1);
	});

	test('Footer has 3 anchors', () => {
		expect(footer.find('a')).toHaveLength(3);
	});

	test('Snapshot Footer', () => {
		const footer = create(<Footer />);
		expect(footer.toJSON()).toMatchSnapshot();
	})
})