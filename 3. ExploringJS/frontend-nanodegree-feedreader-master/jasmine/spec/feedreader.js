/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
    describe('RSS Feeds', function() {

        // check allFeeds are defined and not empty. 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Loop through each feed in the allFeeds 
        // and check it has a URL defined and the URL is not empty.
         it('URL are defined', function() {
            for(i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0); 
            };  
         });

        // Loop through each feed in the allFeeds 
        // and check it has a name defined and the name is not empty.
         it('Name are defined', function() {
            for(i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0); 
            };
         })
    });

    describe('The menu', function() {
        var menuIcon;

        beforeEach(function() {
            menuIcon = $('.menu-icon-link');
        })

        afterEach(function() {
            menuIcon = null;
        })
        
        // Check the menu element is hidden by default. 
         it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
         })

         // Check the menu changes visibility when the menu icon is clicked.
         // It can be checked by its class has 'menu-hidden' property or not.
         it('is hidden and not hidden by clicking menuIcon', function() {
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(true);
         })
    })    

    describe('Initial Entries', function() {
        // It test the loadFeed function is correctly called and there is at least
        // a single .entry element within the .feed container.
        // The loadFeed function is asynchronous so this test will require
        // done() function and beforeEach function.
         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         })
        // check container variation called by loadFeed function has a element.
         it('loadFeed function is called', function(done) {
            var container = $('.feed .entry-link');           
            expect(container.length).toBeGreaterThan(0);
            done();
         });
    });

    describe('New Feed Selection', function() {
        // This test is for ensuring when a new feed is loaded by
        // the loadFeed function that the content actually changes.

        // Actual changes in the content can be checked by comfirming
        // put the different index in the loadFeed function and then 
        // compare the result.  
         beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function() {
                fristFeed = $('.feed').html();
                loadFeed(1, function() {
                    done();
                });                
            });
         });

         it('is loaded function that actually changes', function(done) {     
            var secondFeed = $('.feed').html();
            expect(fristFeed).not.toEqual(secondFeed);
            done();
         });

    });
}());
