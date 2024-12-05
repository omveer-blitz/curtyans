import { css } from "@emotion/react";

export default css`
	* {
		box-sizing: border-box;
	}
	* {
		-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
	}
	html, body {
		font-family: var(--font-family-normal);
		font-size: var(--font-size-body5);
		line-height: var(--font-lineheight-body5);
		scroll-behavior: smooth;
	}

	* {
		&::-webkit-scrollbar {
			width: var(--spacing-sm);
			height: var(--spacing-sm);
		};

		&::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px var(--color-flamingo100);
			border-radius: var(--spacing-sm);
		}

		&::-webkit-scrollbar-thumb {
			border-radius: var(--spacing-sm);
			-webkit-box-shadow: inset 0 0 6px var(--color-flamingo500);
		}
	}

	@font-face{font-family:"revicons";fallback:fallback;src:url("./revicons.woff") format('woff'),url("./revicons.ttf") format('ttf'),url("./revicons.eot") format('ttf')}.react-multi-carousel-list{display:flex;align-items:center;overflow:hidden;position:relative}.react-multi-carousel-track{list-style:none;padding:0;margin:0;display:flex;flex-direction:row;position:relative;transform-style:preserve-3d;backface-visibility:hidden;will-change:transform,transition}.react-multiple-carousel__arrow{position:absolute;outline:0;transition:all .5s;border-radius:35px;z-index:1000;border:0;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer}.react-multiple-carousel__arrow:hover{background:rgba(0,0,0,0.8)}.react-multiple-carousel__arrow::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative}.react-multiple-carousel__arrow:disabled{cursor:default;background:rgba(0,0,0,0.5)}.react-multiple-carousel__arrow--left{left:calc(4% + 1px)}.react-multiple-carousel__arrow--left::before{content:"\e824"}.react-multiple-carousel__arrow--right{right:calc(4% + 1px)}.react-multiple-carousel__arrow--right::before{content:"\e825"}.react-multi-carousel-dot-list{position:absolute;bottom:0;display:flex;left:0;right:0;justify-content:center;margin:auto;padding:0;margin:0;list-style:none;text-align:center}.react-multi-carousel-dot button{display:inline-block;width:12px;height:12px;border-radius:50%;opacity:1;padding:5px 5px 5px 5px;box-shadow:none;transition:background .5s;border-width:2px;border-style:solid;border-color:grey;padding:0;margin:0;margin-right:6px;outline:0;cursor:pointer}.react-multi-carousel-dot button:hover:active{background:#080808}.react-multi-carousel-dot--active button{background:#080808}.react-multi-carousel-item{transform-style:preserve-3d;backface-visibility:hidden}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.react-multi-carousel-item{flex-shrink:0 !important}.react-multi-carousel-track{overflow:visible !important}}[dir='rtl'].react-multi-carousel-list{direction:rtl}.rtl.react-multiple-carousel__arrow--right{right:auto;left:calc(4% + 1px)}.rtl.react-multiple-carousel__arrow--right::before{content:"\e824"}.rtl.react-multiple-carousel__arrow--left{left:auto;right:calc(4% + 1px)}.rtl.react-multiple-carousel__arrow--left::before{content:"\e825"}

	.react-multi-carousel-dot.react-multi-carousel-dot--active button {
		background-color: var(--color-flamingo);
	}
	.react-multi-carousel-dot button {
		background-color: var(--color-flamingo0500);
		border-color: var(--color-flamingo);
		width: 16px;
		height: 16px;
	}

	.react-multiple-carousel__arrow {
		background-color: var(--color-flamingo);
		transition: all .3s;
    box-shadow: 0 5px #3f0401;
		z-index: 1;

		&:hover {
			transform: translateY(5px);
			box-shadow: none;
			background-color: var(--color-flamingo);
		}
	}

	.react-multiple-carousel__arrow.react-multiple-carousel__arrow--right::before {
		content: '\\25BA';
		margin-right: -4px;
	}
	.react-multiple-carousel__arrow.react-multiple-carousel__arrow--left::before {
		content: '\\25BA';
		transform: rotate(180deg);
		margin-left: -4px;
	}

.ReactModal__Body--open,
.ReactModal__Html--open {
  overflow: hidden;
  position: fixed;
  height: 100vh;
  width: 100%;
}
.ReactModal__Overlay {
  opacity: 0;
	background-color: var(--color-flamingo0500) !important;
  transition: opacity .3s cubic-bezier(0, 0, 0.2, 1);
	z-index: 10000;
}
.ReactModal__Overlay--after-open{
  opacity: 1;
}
.ReactModal__Overlay--before-close{
  opacity: 0;
}
.ReactModal__Content {
  backface-visibility: hidden;
  transform: translateY(100%);
  transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1);
}
.ReactModal__Content--after-open{
  transform: translateY(0px);
  transition-delay: .3s;
}
.ReactModal__Content--before-close{
  transform: translateY(100%);
  transition-delay: 0s;
}
`
