import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  let triggerClose: jest.Mock;

  beforeEach(() => {
    triggerClose = jest.fn();
  });

  it('should render the modal content when isOpen is true', () => {
    render(
      <Modal isOpen={true} triggerClose={triggerClose}>
        <div>Modal Content</div>
      </Modal>
    );

    // Verify that the modal content is rendered
    const modalContent = screen.getByText('Modal Content');
    expect(modalContent).toBeInTheDocument();
  });

  it('should call triggerClose when close button is clicked', () => {
    render(
      <Modal isOpen={true} triggerClose={triggerClose}>
        <div>Modal Content</div>
      </Modal>
    );

    // Find the close button and click it
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    // Verify that triggerClose has been called
    expect(triggerClose).toHaveBeenCalledTimes(1);
  });

  it('should focus on close button when modal is open', () => {
    render(
      <Modal isOpen={true} triggerClose={triggerClose}>
        <div>Modal Content</div>
      </Modal>
    );

    const closeButton = screen.getByRole('button');
    expect(closeButton).toHaveFocus();
  });

  it('should call triggerClose when clicking outside the modal', () => {
    render(
      <Modal isOpen={true} triggerClose={triggerClose}>
        <div>Modal Content</div>
      </Modal>
    );

    // Simulate clicking outside the modal
    fireEvent.mouseDown(document.body);

    // Verify that triggerClose has been called
    expect(triggerClose).toHaveBeenCalledTimes(1);
  });
});
