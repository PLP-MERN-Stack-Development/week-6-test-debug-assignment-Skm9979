import { render, screen } from '@testing-library/react';
import ExampleComponent from '../../components/ExampleComponent';

describe('ExampleComponent', () => {
  it('renders correctly', () => {
    render(<ExampleComponent />);
    expect(screen.getByTestId('example-component')).toBeInTheDocument();
    expect(screen.getByText(/Example Component/i)).toBeInTheDocument();
  });
});
