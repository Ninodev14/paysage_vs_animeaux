
    window.addEventListener('orientationchange', function() {
      if (window.orientation === 90 || window.orientation === -90) {
        document.getElementById('rotateMessage').style.display = 'block';
      } else {
        document.getElementById('rotateMessage').style.display = 'none';
      }
    });
