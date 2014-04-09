export default function(){
    return function(key, value){
        if (arguments.length == 1){
            return this.$changes[key] || this.$data[key];
        }
        this.$changes[key] = value;
        return value;
    }.property('$data', '$changes');
}
