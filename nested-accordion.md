Answer these questions in the .md file about the Nested Accordion demo:

## What does it do?
  An article/paragraph/block of text will appear and disappear, pushing elements lower on the page down as it appears, and snapping content lower on the page back up as it is closed.

## What interactive elements exist?
  The arrow beside each heading opens and closes the content below it.

## How do you interact with them?
  By clicking the arrow.

## What visual effects are produced by interacting?
  The paragraph under the heading flies out/appears, and with another click, is hidden.

## How does it do it?
  An eventListener is created for the arrow. When the arrow is clicked, the class of the paragraph/article will change, and the display property will allow the content to appear.
  If the arrow is clicked again, the class will change back to the original class, and the content will not display.

## What existing HTML elements are changed?
  the paragraph display is changed, from either being displayed or not being displayed. the arrow icon changes color and the icon appearance/orientation is changed.

## What new HTML elements are created?
  No new elements are created. The fact that no new elements are being created in my version of the project, and that this question is in our homework, concerns me that I didn't solve the accordion page correctly.

##What CSS styles are used to produce the effect?
  Two different class names are styled with different CSS. The declaration block is exactly identical, except for display: none; for one class.
