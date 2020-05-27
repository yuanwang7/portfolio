
		$(function() {
			$('.images').on('click', function() {

				$('.imageDisplay').attr('src', $(this).attr('src'));
				$('#Modal').modal('show');   
				//caption content is the alt
				$('#caption').html($(this).attr('alt'));
			});		
		});


		$(document).ready(function() {
			$('#fullpage').fullpage({
				//options here
				
				autoScrolling:true,
				scrollHorizontally: true,
				navigation: true,
				anchors: ['homepage', 'parta','parta2', 'partb','partb2', 'partc','partc2','partc3','proposal','portfolio', 'course-reflection','reference'],
				navigationTooltips: ['Home', 'part A-1', 'part A-2','part B-1', 'partB-2', 'part C-1' ,'part C-2','part C-3','proposal', 'portfolio','Course Reflection','reference'],
				showActiveTooltip: true,
				menu: '#menu',
				controlArrow:false,
				slidesNavigation:true,
				slideSelector:".slides"
			});

			//methods
			
		});