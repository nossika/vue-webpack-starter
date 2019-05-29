import React from 'react';
import MyTile from './index';
import TestRenderer from 'react-test-renderer';

test('my-title', ()=> {
    const testRenderer = TestRenderer.create(<MyTile>test</MyTile>);
    const testInstance = testRenderer.root;
    expect(testInstance.props.children).toBe('test');
});