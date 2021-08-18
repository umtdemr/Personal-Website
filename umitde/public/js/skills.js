var Skills = /** @class */ (function () {
    function Skills(wr, infoWr) {
        this.items = [];
        this.wrapper = wr;
        this.infoWrapper = infoWr;
        var index = 0;
        for (var key in wr.children) {
            try {
                if (wr.children[key].classList.contains("tech_selection")) {
                    this.selection = wr.children[key];
                    this.getCurrentPositionFromDiv();
                }
                else if (wr.children[key].classList.contains("tech_item")) {
                    this.items.push({
                        index: index,
                        active: wr.children[key].classList.contains("active"),
                        item: wr.children[key],
                    });
                    index++;
                }
            }
            catch (_a) {
            }
        }
        this.addEvents();
        this.initialAction();
    }
    Object.defineProperty(Skills.prototype, "position_y", {
        get: function () {
            return this._position_y;
        },
        set: function (pos) {
            this._position_y = pos;
        },
        enumerable: false,
        configurable: true
    });
    Skills.prototype.getCurrentPositionFromDiv = function () {
        var position = +getTranslateValue(this.selection).y;
        this.position_y = position;
        return position;
    };
    Skills.prototype.calculatePercentOfSpan = function (width) {
        var percent = (width * 100) / this.wrapper.offsetWidth;
        return Math.floor(percent);
    };
    ;
    Skills.prototype.initialAction = function () {
        this.moveobj(0);
        var firstElementWidth = this.items[0].item.querySelector("span").offsetWidth;
        this.setMaxWidth(this.calculatePercentOfSpan(firstElementWidth));
        this.onResizeSetup();
    };
    Skills.prototype.getActiveItem = function () {
        var foundItem;
        this.items.forEach(function (item) {
            if (item.active) {
                foundItem = item.item;
            }
        });
        return foundItem;
    };
    Skills.prototype.getPercentMaxWidth = function (item) {
        var spanWidth = item.querySelector("span").offsetWidth;
        var selectionNewWidth = this.calculatePercentOfSpan(spanWidth);
        return selectionNewWidth;
    };
    Skills.prototype.onResizeSetup = function () {
        var _this = this;
        window.addEventListener("resize", function () {
            var activeItem = _this.getActiveItem();
            var spanWidth = _this.getPercentMaxWidth(activeItem);
            _this.setMaxWidth(spanWidth);
        });
    };
    Skills.prototype.moveobj = function (pos) {
        this.selection.style.transform = "translateY(" + pos + "%)";
    };
    Skills.prototype.setMaxWidth = function (width) {
        this.selection.style.maxWidth = width + "%";
    };
    Skills.prototype.setVisible = function (item) {
        var activeTarget = item.dataset["target"];
        var activeItem = this.infoWrapper.querySelector("[data-content=\"" + activeTarget + "\"]");
        var allInfoItems = this.infoWrapper.querySelectorAll(".content");
        allInfoItems.forEach(function (item) {
            item.classList.remove("active");
        });
        activeItem.classList.add("active");
    };
    Skills.prototype.addEvents = function () {
        var _this = this;
        this.items.forEach(function (selectable_item) {
            var item = selectable_item.item;
            item.addEventListener('click', function (event) {
                event.preventDefault();
                var selected_index = selectable_item.index;
                var position = selected_index * 100;
                _this.moveobj(position);
                _this.addActiveToSelected(selected_index);
                _this.setVisible(item);
                var selectionNewWidth = _this.getPercentMaxWidth(item);
                _this.setMaxWidth(selectionNewWidth);
            });
        });
    };
    Skills.prototype.removeActiveClass = function () {
        this.items = this.items.map(function (selectable_item) {
            var item = selectable_item.item;
            item.classList.remove("active");
            return { index: selectable_item.index, active: false, item: item };
        });
    };
    Skills.prototype.addActiveToSelected = function (index) {
        this.removeActiveClass();
        var selectable_item = this.items[index];
        selectable_item.item.classList.add("active");
        selectable_item.active = true;
        this.items[index] = selectable_item;
    };
    Skills.prototype.print = function () {
        // console.log(this.wrapper);
        // console.log(this.selection);
        // console.log(this.position_y);
        // console.log(this.items);
    };
    return Skills;
}());
function getTranslateValue(element) {
    var style = window.getComputedStyle(element);
    var matrix = style['transform'];
    // No transform property. Simply return 0 values.
    if (matrix === 'none') {
        return {
            x: 0,
            y: 0,
            z: 0
        };
    }
    // Can either be 2d or 3d transform
    var matrixType = '2d';
    var matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
    // 2d matrices have 6 values
    // Last 2 values are X and Y.
    // 2d matrices does not have Z value.
    if (matrixType === '2d') {
        return {
            x: matrixValues[4],
            y: matrixValues[5],
            z: 0
        };
    }
    // 3d matrices have 16 values
    // The 13th, 14th, and 15th values are X, Y, and Z
    if (matrixType === '3d') {
        return {
            x: matrixValues[12],
            y: matrixValues[13],
            z: matrixValues[14]
        };
    }
}
