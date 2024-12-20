//import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

//As a user I want to see my product widgets.
test('3 wigdets are displayed', async () => {
  render(<App />);
  waitFor(() => {
    const widgetContainer = screen.getByText(/Per product widgets/i);
    expect(widgetContainer).toBeInTheDocument();
  })
  waitFor(() => {
    const widgets = screen.getAllByText(/This product/i);
    screen.debug();
    expect(widgets).toHaveLength(3);
    //qexpect(widgets.filter(widget => widget.active)).to
  })
  //As a user I want to customise my widgets by changing their colors, active state and whether it’s linked to my public profile (using client-side state management)

  //Only one widget can have the active state at a time
});




