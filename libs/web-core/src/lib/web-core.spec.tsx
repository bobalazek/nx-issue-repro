import { render } from '@testing-library/react';

import WebCore from './web-core';

describe('WebCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebCore />);
    expect(baseElement).toBeTruthy();
  });
});
