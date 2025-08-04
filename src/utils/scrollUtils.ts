// src/utils/scrollUtils.ts

// This is our main, working smooth scroll function. No changes needed here.
export const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement> | MouseEvent, 
    targetId: string
) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  const headerElement = document.querySelector('.main-header') as HTMLElement;

  if (targetElement && headerElement) {
    const headerHeight = headerElement.offsetHeight;
    const targetPosition = targetElement.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
};

// ================================================================
// THE FIX IS HERE
// This function now handles BOTH scrolling AND closing the sidebar.
// ================================================================
export const handleSidebarLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string,
  isSidebarOpen: boolean,
  toggleSidebar: () => void
) => {
  // 1. Immediately start the smooth scroll
  handleSmoothScroll(e, targetId);

  // 2. If the sidebar is currently open, wait a moment and then close it.
  // The delay makes the experience feel smoother, as the scroll starts
  // before the sidebar begins to animate away.
  if (isSidebarOpen) {
    setTimeout(() => {
      toggleSidebar();
    }, 300); // 300 milliseconds = 0.3 seconds
  }
};