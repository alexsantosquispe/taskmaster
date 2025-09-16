import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const onSearchCallbackMock = jest.fn();
  const props = {
    onSearchCallback: onSearchCallbackMock,
    placeholder: 'Search a value'
  };

  it('should render the component correctly with default values', () => {
    render(<SearchBar onSearchCallback={onSearchCallbackMock} />);
    const searchbar = screen.getByRole('searchbox');

    expect(searchbar).toBeInTheDocument();
    expect(searchbar).toHaveAttribute('type', 'search');
    expect(searchbar).toHaveAttribute('placeholder', 'Search by keyword');
  });

  it('should render the component correctly', () => {
    render(<SearchBar {...props} />);
    const searchbar = screen.getByRole('searchbox');

    expect(searchbar).toBeInTheDocument();
    expect(searchbar).toHaveAttribute('type', 'search');
    expect(searchbar).toHaveAttribute('placeholder', 'Search a value');
  });

  it('should call onSearchCallback when input value changes after debounce', async () => {
    render(<SearchBar {...props} />);

    const user = userEvent.setup();

    const searchbar = screen.getByRole('searchbox');
    const inputValue = 'test';
    await user.type(searchbar, inputValue);

    expect(onSearchCallbackMock).not.toHaveBeenCalled();

    await new Promise((r) => setTimeout(r, 1100));

    expect(onSearchCallbackMock).toHaveBeenCalledTimes(1);

    expect(onSearchCallbackMock).toHaveBeenCalledWith(inputValue);
  });
});
