export default Ember.Object.extend({
    init: function(){
        this.set('identityMap', {});
    },
    push: function(type, data){
        var identityMap = this.get('identityMap');
        if (!identityMap[type]){
            identityMap[type] = {};
        }
        var existing = this.getById(type, data.id);
        if (existing){
            existing.set('$data', data);
            return existing;
        }
        return identityMap[type]['' + data.id] = this.container.lookupFactory('model:' + type).create({
            id: '' + data.id,
            $data: data
        });
    },
    getById: function(type, id){
        var typeIdentityMap = this.get('identityMap')[type];
        return typeIdentityMap['' + id];
    },
    find: function(){
    }
});
