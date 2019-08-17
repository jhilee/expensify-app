import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render correct statments totalling 1 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={4500} />);
    expect(wrapper).toMatchSnapshot();  
}); 

test('should render correct statments totalling 2 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={56000034} />);
    expect(wrapper).toMatchSnapshot();  
}); 