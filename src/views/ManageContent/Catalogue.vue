<template>
  <v-card class="pa-4">
    <v-card-text class="pa-0">
      <v-btn class="primary" @click="click('create category', treeData)">New Category</v-btn>
    </v-card-text>
    <DraggableTree class="tree pt-4" :data="treeData" draggable @drag="onDrag" @change="onDrop">
      <div slot-scope="{data, store}">
        <template v-if="!data.isDragPlaceHolder">
          <v-icon v-if="data.children && data.children.length" @click="store.toggleOpen(data)">
            {{data.open ? 'arrow_drop_down' : 'arrow_right'}}
          </v-icon>
          <div class="tree-node-name flex"
               v-bind:class="{'pl-4': !(data.children && data.children.length),
               'tree-category': data._vm.level === 1,
                'tree-subject': data._vm.level === 2,
                 'tree-sub-category': data._vm.level === 3,
                  'tree-topic': data._vm.level === 4}">
            {{data.name}}
          </div>
          <v-btn icon small v-if="data._vm.level < 4" @click="click('create', data)">
            <v-icon>add</v-icon>
          </v-btn>
          <v-btn icon small @click="click('edit', data)">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn icon small @click="deleteNode(store, data)">
            <v-icon>delete</v-icon>
          </v-btn>
        </template>
      </div>
    </DraggableTree>

    <v-dialog v-model="dialog" width="500">
      <catalogue-modal
        :item="item"
        :type="type"
        :isShow="dialog"
        @close="dialog = false"
        @create="create"
        @save="save"/>
    </v-dialog>
  </v-card>
</template>

<script>
import { DraggableTree } from 'vue-draggable-nested-tree'
import * as th from 'tree-helper'
import CatalogueModal from '../../components/Modal/CatalogueModal'

export default {
  name: 'Catalogue',
  components: { CatalogueModal, DraggableTree },
  data: () => ({
    treeData: [{
      name: 'Science',
      children: [
        {
          name: 'Physics',
          children: [
            {
              name: 'Linear Motion 1',
              children: [
                {
                  name: 'motion'
                },
                {
                  name: 'sub'
                }]
            },
            { name: 'Linear motion 2' },
            { name: 'Linear motion 3' }
          ]
        },
        { name: 'Chemistry' },
        { name: 'Physical Science' }
      ]
    }, { name: 'Biology' }],
    maxLevel: 4,
    dialog: false,
    item: null,
    type: 'create',
    selected: null
  }),
  mounted () {
    this.setTree(this.treeData)
  },
  methods: {
    setTree (treeData) {
      th.depthFirstSearch(treeData, (childNode) => {
        this.$set(childNode, 'draggable', childNode._vm.level > 2)
      })
    },
    click (type, item) {
      this.type = type
      if (type === 'create' || type === 'create category') this.item = {}
      else this.item = item
      this.dialog = true
      this.selected = item
    },
    create (val, isCategory) {
      const that = this
      if (isCategory) {
        this.selected.push({ name: val })
      } else {
        this.selected.children.push({ name: val })
      }

      this.dialog = false
      setTimeout(() => (that.setTree(that.treeData)), 50)
    },
    save (val) {
      this.selected.name = val
      this.dialog = false
    },
    deleteNode (store, item) {
      store.deleteNode(item)
    },
    onDrag (node) {
      let nodeLevels = 1
      th.depthFirstSearch(node, (childNode) => {
        if (childNode._vm.level > nodeLevels) {
          nodeLevels = childNode._vm.level
        }
      })
      nodeLevels = nodeLevels - node._vm.level + 1
      const childNodeMaxLevel = this.maxLevel - nodeLevels

      th.depthFirstSearch(this.treeData, (childNode) => {
        this.$set(childNode, 'droppable', childNode._vm.level <= childNodeMaxLevel)
      })
    },
    onDrop (node) {
      const that = this
      setTimeout(() => (that.$set(node, 'draggable', node._vm.level > 2)), 50)
    }
  }
}
</script>

<style lang="scss">
.draggable-placeholder-inner {
  border: 1px dashed #0088F8;
  box-sizing: border-box;
  background: rgba(0, 136, 249, 0.09);
  color: #0088f9;
  text-align: center;
  padding: 0;
  display: flex;
  align-items: center;
}

.tree {
  .tree-node-inner {
    border: none;
    padding: 0;
    cursor: pointer;

    & > div {
      align-items: center;
      display: flex;
    }
  }

  .tree-node-inner-back:hover {
    background: #ddd;
  }

  .tree-node-name {
    font-size: 1.2em;
  }

  .tree-category {
    color: red;
    cursor: default;
  }

  .tree-subject {
    color: blue;
    cursor: default;
  }

  .tree-sub-category {
    color: darkmagenta;
  }

  .tree-topic {
    color: seagreen;
  }

  .v-icon {
    color: rgba(0, 0, 0, .54) !important;
  }
}
</style>
