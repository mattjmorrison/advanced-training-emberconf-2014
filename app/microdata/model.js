export default Ember.Object.extend({
    init: function(){
        this.set('$changes', {});
    },
    $mergeChanges: function(){
        $.extend(this.get('$data'), this.get('$changes'));
        this.set('$changes', {});
    }
});
